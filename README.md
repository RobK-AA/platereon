# README

Welcome to [Platereon](https://platereon.herokuapp.com/)! Originally conceived as a clone of the popular website, Patreon, Platereon allows
culinary artists to get rewarded by their supporters for doing what they love - making great food and 
sharing it with the world.

Platereon was built with React, Redux, JavaScript, HTML, CSS and Ruby on Rails.

Platereon offers both creators and supporters a number of exciting features:
  * Full session control
    * The ability to log in and log out
    * Browser knows if you're signed in on refresh
  * Seamless navigation 
    * Traverse the site from the main page to either log-in or sign-up
    * Create communities with ease (once logged in)
    * Forms are clear and easy to submit
    * Looks and feels like the real patreon.com
  * Demo User
    * Sign in as a demo user to become a creator and start getting rewarded
  * Create engaging communities 
    * Share your content 
    * Customize your membership levels to offer perks for your supporters
  * Post engaging content in your communities
    * Members of communities can see community posts
    * Members can like and comment on posts
  * Search for creators for more communities to join
  
## Posts
 ![Posts](https://media2.giphy.com/media/mMxScwpJnzl9xiqKS2/giphy.gif)

```
render() {
    const { title, body, imageUrls, communityId, videoUrl } = this.state;
    let filledOut = (body.length > 0 && title.length > 0) && communityId > 0;
    
    const textPost = this.props.location.pathname.includes('text');
    const imagePost = this.props.location.pathname.includes('images');
    const videoPost = this.props.location.pathname.includes('video');
    
    imagePost
      ? (filledOut =
          body.length > 0 &&
          title.length > 0 &&
          imageUrls.length > 0 &&
          communityId > 0)
      : videoPost ? 
          (filledOut =
            body.length > 0 &&
            title.length > 0 &&
            videoUrl.length > 0 && 
            (videoUrl.includes('youtube') && videoUrl.includes('watch?')) &&
            communityId > 0) :
            (filledOut = (body.length > 0 && title.length > 0) && communityId > 0);
  ...
  ```
## Search
 ![Search](https://media3.giphy.com/media/34e8OEmx5EUng8cyv7/giphy.gif)
 
```
def self.search(search)
    if search
      where(["lower(short_description) LIKE ? 
        OR lower(description) LIKE ? 
        OR lower(name) LIKE ?", 
        "%#{search.downcase}%", "%#{search.downcase}%", "%#{search.downcase}%"])
    else
      all
    end
end
  ```
