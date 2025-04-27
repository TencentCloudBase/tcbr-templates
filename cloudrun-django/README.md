## 快速开始


## 本地调试


## 实时开发


## Dockerfile 最佳实践



## 服务 API 文档

### `GET /apis/users`

获取用户列表

### 请求参数

无

### 返回参数

- `total`: 用户总数
- `items`: 返回用户列表

### 返回结果示例

```json
{
  "total": 2,
  "items": [
    {
      "id": 0,
      "name": "zhangsan"
    },
    {
      "id": 1,
      "name": "lisi"
    }
  ]
}
```

### 调用示例

```curl https://<云托管域名>/apis/users```
