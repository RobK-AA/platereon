# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Community.destroy_all
Membership.destroy_all
Post.destroy_all

#Users
demo = User.create(name: "Demo User", email: "DemoUser", password: "123456")
abe = User.create(name: "Abe", email: "abe@abe.com", password: "123456")
bob = User.create(name: "Bob", email: "bob@bob.com", password: "123456")
christine = User.create(name: "Christine", email: "christine@christine.com", password: "123456")
ed = User.create(name: "Ed", email: "ed@ed.com", password: "123456")

#Communities

demo_community = Community.create(name: "Demo User", creator_id: demo.id, plural: false, description: "Tasty Stuff")
abe_community = Community.create(name: "Abe and Co.", creator_id: abe.id, plural: true, description: "Mostly eggplant")
bob_community = Community.create(name: "Bob", creator_id: bob.id, plural: false, description: "I make delicious burgers")
christine_community = Community.create(name: "Christine", creator_id: christine.id, plural: false, description: "I make great wraps")
ed_community = Community.create(name: "Ed's family", creator_id: ed.id, plural: true, description: "Really really Tasty Stuff")

#Memberships

membership0 = Membership.create(member_id: demo.id, community_id: abe_community.id)
membership1 = Membership.create(member_id: bob.id, community_id: abe_community.id)
membership2 = Membership.create(member_id: abe.id, community_id: abe_community.id)
membership3 = Membership.create(member_id: demo.id, community_id: demo_community.id)
membership4 = Membership.create(member_id: ed.id, community_id: christine_community.id)
membership5 = Membership.create(member_id: christine.id, community_id: ed_community.id)

#Posts

post0 = Post.create(title: "Hey look a post", body: "This is a really awesome post.", author_id: demo.id, community_id: demo_community.id)
post1 = Post.create(title: "Another great post", body: "Again - a great post!.", author_id: demo.id, community_id: demo_community.id)
post2 = Post.create(title: "Post", body: "Wow.", author_id: abe.id, community_id: abe_community.id)
post3 = Post.create(title: "Thanks", body: "Thank you for joining my community.", author_id: abe.id, community_id: abe_community.id)