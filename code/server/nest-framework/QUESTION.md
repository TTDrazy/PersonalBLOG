### 常见问题
- 问题：ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server;consider upgrading MySQL client
- 解决：ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';