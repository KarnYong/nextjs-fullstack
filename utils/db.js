const mysql = require('mysql2')
export const mysqlPool = mysql.createPool('mysql://4JfUf3kMiVuDvha.root:KlVGFyldzfC8SFFl@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/6090059_dit207?ssl={"rejectUnauthorized":true}')