/** Auto-generated by test_app.py:TestApp._test_generate_tflow_js */
export default function(){
    return {
    "client_conn": {
        "address": [
            "127.0.0.1",
            22
        ],
        "alpn_proto_negotiated": "http/1.1",
        "cipher_name": "cipher",
        "id": "4a18d1a0-50a1-48dd-9aa6-d45d74282939",
        "sni": "address",
        "timestamp_end": 946681206,
        "timestamp_start": 946681200,
        "timestamp_tls_setup": 946681201,
        "tls_established": true,
        "tls_version": "TLSv1.2"
    },
    "error": {
        "msg": "error",
        "timestamp": 946681207.0
    },
    "id": "d91165be-ca1f-4612-88a9-c0f8696f3e29",
    "intercepted": false,
    "is_replay": null,
    "marked": false,
    "modified": false,
    "request": {
        "contentHash": "ed7002b439e9ac845f22357d822bac1444730fbdb6016d3ec9432297b9ec9f73",
        "contentLength": 7,
        "headers": [
            [
                "header",
                "qvalue"
            ],
            [
                "content-length",
                "7"
            ]
        ],
        "host": "address",
        "http_version": "HTTP/1.1",
        "is_replay": false,
        "method": "GET",
        "path": "/path",
        "port": 22,
        "pretty_host": "address",
        "scheme": "http",
        "timestamp_end": 946681201,
        "timestamp_start": 946681200,
        "trailers": [
            [
                "trailer",
                "qvalue"
            ]
        ]
    },
    "response": {
        "contentHash": "ab530a13e45914982b79f9b7e3fba994cfd1f3fb22f71cea1afbf02b460c6d1d",
        "contentLength": 7,
        "headers": [
            [
                "header-response",
                "svalue"
            ],
            [
                "content-length",
                "7"
            ]
        ],
        "http_version": "HTTP/1.1",
        "is_replay": false,
        "reason": "OK",
        "status_code": 200,
        "timestamp_end": 946681203,
        "timestamp_start": 946681202,
        "trailers": [
            [
                "trailer",
                "qvalue"
            ]
        ]
    },
    "server_conn": {
        "address": [
            "address",
            22
        ],
        "alpn_proto_negotiated": "http/1.1",
        "id": "f087e7b2-6d0a-41a8-a8f0-e1a4761395f8",
        "ip_address": [
            "192.168.0.1",
            22
        ],
        "sni": "address",
        "source_address": [
            "address",
            22
        ],
        "timestamp_end": 946681205,
        "timestamp_start": 946681202,
        "timestamp_tcp_setup": 946681203,
        "timestamp_tls_setup": 946681204,
        "tls_established": true,
        "tls_version": "TLSv1.2"
    },
    "type": "http"
}
}