import wepy from 'wepy';
import { service } from '../config.js'
import http from '../mixins/http'
import base from '../mixins/base'

export default class ShareMessage extends wepy.mixin {
  onLoad(e) {
    wepy.showShareMenu({
      withShareTicket: true
    })
  }
  onShow(e) {
    wepy.showShareMenu({
      withShareTicket: true
    })
  }
  methods = {
    onShareAppMessage(res) {
      if (res.source.data.isShare) {
        return {
          path: res.source.data.shareUrl + '?id=' + res.source.data.shareUrlId + '&share=true'
        }
      } else if (res.source.data.path) {
        return {
          path: res.source.data.path
        }
      }
    }
  }
}
