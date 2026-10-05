import { Composition } from 'remotion'
import { PlumberHero } from './PlumberHero.jsx'

export const RemotionRoot = () => {
  return (
    <Composition
      id="PlumberHero"
      component={PlumberHero}
      durationInFrames={150}
      fps={30}
      width={800}
      height={800}
    />
  )
}
