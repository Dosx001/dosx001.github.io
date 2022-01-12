import PostList from 'components/PostList';
import { imgs } from 'const/Education';

const Education = () => {
  const posts = [
    {
      title: "California Polytechnic State University",
      id: "cal-ploy",
      content: [
        {
          tag: "h2",
          id: "beacon",
          inner: "Beamforming Elevated Array for COsmic Neutrinos (BEACON)"
        },
        {
          tag: "slider",
          imgs: imgs.beacon
        },
        {
          tag: "h2",
          id: "folk",
          inner: "Imagen y Espíritu Ballet Folklórico de Cal Poly"
        },
        {
          tag: "slider",
          imgs: imgs.folk
        },
        {
          tag: "h2",
          id: "chess",
          inner: "Chess Club"
        },
        {
          tag: "slider",
          imgs: imgs.chess
        },
        {
          tag: "h2",
          id: "mexa",
          inner: "MEXA"
        },
        {
          tag: "slider",
          imgs: imgs.mexa
        },
      ]
    },
    {
      title: "Woodrow Wilson High School",
      id: "wilson",
      content: [
        {
          tag: "h2",
          id: "avid",
          inner: "AVID"
        },
        {
          tag: "slider",
          imgs: imgs.avid
        },
        {
          tag: "h2",
          id: "srla",
          inner: "Student Run Los Angeles"
        },
        {
          tag: "slider",
          imgs: imgs.srla
        },
        {
          tag: "h2",
          id: "science",
          inner: "Science Club"
        },
        {
          tag: "slider",
          imgs: imgs.sci
        },
      ]
    },
  ]
  return (
    <PostList posts={posts}/>
  );
}

export default Education;
