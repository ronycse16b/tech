export const CatagoryData = async()=>{
    const CatagoryData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const singleCatagory = await CatagoryData.json()
    return singleCatagory;
    
    
    }