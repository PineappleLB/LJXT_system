import { message } from 'antd';
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, callback) {
	options.credentials = 'include';
	fetch(url, options)
		.then(result => result.json())
		.then((data) => {
			if(data && data.code == -1) {
                message.success('您的账号已在其他地方登录或登录已过期，请重新登录',function(){
                    sessionStorage.removeItem("userInfo");
                    sessionStorage.removeItem("managerInfo");
                    sessionStorage.removeItem("superManagerInfo");
                    window.location.href="/login";
                });
			} else {
                callback(data);
            }
		});
}
