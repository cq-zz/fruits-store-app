// 同时发送ajax次数
let ajaxCount = 0;

// ajax请求
export const request = (params) => {
    ajaxCount++;
    // 显示加载中提示
    wx.showLoading({
        title: "加载中...",
        mask: true
    });

    const baseUrl = "https://"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            succsess: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            // 无论成功失败都执行
            complete: () => {
                ajaxCount--;
                // 关闭正在加载提示
                if (ajaxCount === 0) {
                    // ajax请求次数为0后执行
                    wx.hideLoading();
                }
            }
        })
    });
}