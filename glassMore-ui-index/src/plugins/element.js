import {
  ElButton,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElMenu)
  app.use(ElMenuItem)
}
