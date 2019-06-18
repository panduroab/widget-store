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
//Generates a list of random widgets
const total = 20;
const colors = [
  'White', 'Silver', 'Gray', 'Black', 'Red', 'Maroon', 'Yellow', 'Olive', 'Lime',
  'Green', 'Aqua', 'Teal', 'Blue', 'Navy', 'Fuchsia', 'Purple'
];
const sizes = ['Small', 'Medium', 'Big'];
const categories = ['Prime', 'Elite', 'Extreme Edition'];
const randomWidgets = [];
for (let i = 0; i < total; i++) {
  const random_name = Math.random().toString(36).substr(2, 5);
  const stock = Math.floor(Math.random() * 30) + 1;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  randomWidgets.push({
    name: `Widget-${random_name}`,
    category,
    color,
    size,
    stock
  });
}
db.widgets.insertMany(randomWidgets);