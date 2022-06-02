import React,{useEffect, useState} from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import './AvailableMeals.css'


const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchMeals = async() => {
      try{
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://react-http-1ca3c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
        if(!response.ok){
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        console.log(data);
    
        const  mealsArray = [];
    
        for (const key in data) {
          mealsArray.push({
            id:key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description
          })
      }
      setMeals(mealsArray);
      } catch(error){
        console.log(error.message);
        setError(error.message);
      }  
      setIsLoading(false);
       
    } 
    fetchMeals();
  },[])

    const mealsList = meals.map((meal) =>{
        return <MealItem id = {meal.id} key = {meal.id} name ={meal.name} description = {meal.description} price = {meal.price}/>
    })

  return (
    <div className='meals'>
        <Card>
        <ul>
            {mealsList}
        </ul>
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        </Card>
    </div>
  )
}

export default AvailableMeals