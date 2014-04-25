/**
 * Created by wangboo on 14-4-24.
 */

var config = {
    backend: [
        {
            ip: "localhost"
            , port: 8080
            , weight: 10
        }
        , {
            ip: "localhost"
            , port: 8080
            , weight: 10
        }
    ]
    , port: 10000
    , protocol: "http-get"
}
exports.config = config;
