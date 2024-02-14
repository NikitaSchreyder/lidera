import HomeBaner from "./components/baner/HomeBaner"
import HomeNotice from "./components/notice/HomeNotice"
import HomeCollection from "./components/collection/HomeCollection"
import HomeEssentials from "./components/essentials/HomeEssentials"
import FloatImage from "./components/float-image/FloatImage"
import HomeSubscribe from "./components/subscribe/HomeSubscribe"
import HomeMoments from "./components/moments/HomeMoments"

const HomeIndexPage: React.FC = () => {
  return (
    <>
      <HomeBaner />
      <HomeNotice />
      <HomeCollection />
      <HomeEssentials />
      <FloatImage 
        imagePosition="left" 
        title="Our Design Story" 
        image="/moments/kitchen.jpg"
        squareImage={true}
        text="We believe in thoughtful, intentional living. So we promise not to clutter your cabinets with one-off pieces you’ll rarely use. Our collection only includes items you’ll reach for every day. Because mindful living should be simple, not stressful." 
      />
      <FloatImage
        imagePosition="right"
        title="Your Table Your Time"
        image="/moments/food.jpg"
        text="Our modern lives keep us in constant motion. But what keeps us moving isn’t always what moves us. Our time at the table is our pause button. Meals can become moments and moments can become memories. So grab a plate, pull up a seat, and stay a while" 
      />
      <HomeSubscribe />
      <HomeMoments />  
    </>
  )
}

export default HomeIndexPage