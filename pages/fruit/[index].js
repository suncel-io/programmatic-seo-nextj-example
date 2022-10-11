//    /fruit/[index].js
import { fruitsData } from "../../data.js";

const FruitPage = ({ fruitData }) => {
  return (
    <div key={fruitData.id} className='mx-auto mt-8 text-center'>
      <h1 className='text-4xl text-bold'>{fruitData.name} calories</h1>
      <p>serving : {fruitData.serving}</p>
      <p>calories : {fruitData.calories}</p>
      <p>calories / 100g: {fruitData.calories_100g}</p>
    </div>
  );
};

export async function getStaticPaths() {
  let paths = fruitsData.map((x) => {
    return { params: { index: x.name } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: { fruitData: fruitsData.find((e) => e.name == context.params.index) },
  };
}

export default FruitPage;
