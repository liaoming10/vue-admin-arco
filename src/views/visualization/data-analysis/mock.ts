import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'
import { PostData } from '@/types/global'

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/public-opinion-analysis'), 'post', (options: PostData) => {
      const { quota = 'visitors' } = JSON.parse(options.body)

      if (['visitors', 'comments'].includes(quota)) {
        const year = new Date().getFullYear()
        const getLineData = (name: number) => {
          return new Array(12).fill(0).map((_item, index) => {
            return {
              x: `${index + 1} 月`,
              y: Mock.Random.natural(0, 100),
              name: String(name),
            }
          })
        }
        return successResponseWrap({
          count: 5670,
          growth: 203.12,
          chartData: [...getLineData(year), ...getLineData(year - 1)],
        })
      }

      if (['published'].includes(quota)) {
        const year = new Date().getFullYear()
        const getLineData = (name: number) => {
          return new Array(12).fill(0).map((_item, index) => ({
            x: `${index + 1}日`,
            y: Mock.Random.natural(20, 100),
            name: String(name),
          }))
        }
        return successResponseWrap({
          count: 5671,
          growth: 206.32,
          chartData: [...getLineData(year)],
        })
      }

      return successResponseWrap({
        count: 5670,
        growth: 206.32,
        chartData: [
          // itemStyle for demo
          { name: '文本类', value: 25, itemStyle: { color: '#8D4EDA' } },
          { name: '图文类', value: 35, itemStyle: { color: '#165DFF' } },
          { name: '视频类', value: 40, itemStyle: { color: '#00B2FF' } },
        ],
      })
    })

    Mock.mock(new RegExp('/api/content-publish'), 'get', () => {
      const generateLineData = (name: string) => {
        const result = {
          name,
          x: [] as string[],
          y: [] as number[],
        }

        new Array(12).fill(0).map((_item, index) => {
          result.x.push(`${index * 2}:00`)
          result.y.push(Mock.Random.natural(1000, 3000))
        })

        return result
      }
      return successResponseWrap([
        generateLineData('纯文本'),
        generateLineData('图文类'),
        generateLineData('视频类'),
      ])
    })

    Mock.mock(new RegExp('/api/popular-author/list'), 'get', () => {
      const generateData = () => {
        const list = new Array(7).fill(0).map((_item, index) => ({
          ranking: index + 1,
          author: Mock.mock('@ctitle(5)'),
          contentCount: Mock.mock(/[0-9]{4}/),
          clickCount: Mock.mock(/[0-9]{4}/),
        }))
        return {
          list,
        }
      }
      return successResponseWrap({
        ...generateData(),
      })
    })
  },
})
