conn = new Mongo();
db = conn.getDB('widget_db');
db.createUser({
  user: "widget_db_admin",
  pwd: "*53cur3!P455w0rd*",
  roles: [
    {
      role: "readWrite",
      db: "widget_db"
    }
  ]
});