export const getSetting = () => {
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

export const chooseAddress = () => {
    return new Promise((resolve, reject) => {
        wx.chooseAddress({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

export const openSetting = () => {
    return new Promise((resolve, reject) => {
        wx.openSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

/**
 * 弹窗提示
 * @param {object} content 提示内容
 */
export const showModal = ({ content }) => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: '提示',
            content: content,
            success: (res) => {
              resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
          })
    })
}

/**
 * 消息提示
 * @param {object} title 提示内容
 */
 export const showToast = ({ title }) => {
    return new Promise((resolve, reject) => {
        wx.showToast({
            title: title,
            icon: 'none',
            success: (res) => {
              resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
          })
    })
}

/**
 * 登录
 */
 export const login = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            timeout: 10000,
            success: (res) => {
              resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
          })
    })
}

/**
 * 微信小程序支付
 * @param {object} pay timeStamp: '',nonceStr: '',package: '',signType: '',paySign: '',
 * @returns 
 */
 export const requestPayment = (pay) => {
    return new Promise((resolve, reject) => {
        wx.requestPayment({
            ...pay,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {}
        });
          
    })
}