# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
require 'net/http'
require 'uri'

20.times do |x|
  faker = Faker::LoremFlickr.image
  first_part = faker.slice"http://loremflickr.com"

  r = Net::HTTP.get_response(URI.parse(faker))
  if r.code == "301"
    r = Net::HTTP.get_response(URI.parse(r.header['location']))
    second_part = r.header['location']
  end

  url = first_part + second_part
  Image.create!(url: url)
  puts "URL #{x} was added to database!"
end