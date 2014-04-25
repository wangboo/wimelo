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
    , port: 9090
    , protocol: "http"
}
exports.config = config;
