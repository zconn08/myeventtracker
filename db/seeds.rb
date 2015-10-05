# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Event.create(occasion: "Birthday Party", invited_count: 120, year: 2015, month: 3, day: 14, cancelled: false)
Event.create(occasion: "Technical Discussion", invited_count: 23, year: 2015, month: 4, day: 24, cancelled: false)
Event.create(occasion: "Press release", invited_count: 64, year: 2015, month: 6, day: 7, cancelled: true)
Event.create(occasion: "New year party", invited_count: 55, year: 2016, month: 1, day: 1, cancelled: false)
