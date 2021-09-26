import { ElNotification } from 'element-plus'

export const pushComponent = async (compName) => {
  const data = {
    compName: compName
  }

  const res = await fetch('/addMoudle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  })
  switch (res.status) {
    // eslint-disable-next-line no-lone-blocks
    case 404: {
      ElNotification({
        title: 'Error',
        message: '与服务器连接失败',
        type: 'error'
      })
    }
      break
    // eslint-disable-next-line no-lone-blocks
    case 201: {
      ElNotification({
        title: 'Success',
        message: `${compName}组件已成功添加到项目`,
        type: 'success'
      })
    }
      break
    // eslint-disable-next-line no-lone-blocks
    case 206: {
      ElNotification({
        title: 'Warning',
        message: `${compName}组件已经添加成功`,
        type: 'warning'
      })
    }
      break
  }
}
