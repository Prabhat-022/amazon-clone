import { useState } from "react";
import { supabase } from "../suparbase/Products";

export const useSuperbase = () => {
  const [product, setProduct] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensClothing, setMensProduct] = useState<any>([]);
  const [womensClothing, setWomensProduct] = useState<any>([]);

  //get data from supabase
  const getDataFromSupabase = async () => {
    const { data, error } = await supabase.from("product").select("*");

    if (data) {
      setProduct(data);
    }

    if (error) {
      console.log("error:", error);
    }
  };

  //get filter data form supabase
  const getFilteredData = async (query: string) => {
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      ); // cloth

    if (data) {
      setFilterData(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (id: number) => {
    const { data, error } = await supabase.from("product").select("*").eq("id", id);
    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getMensClothing = async () => {
    const {data, error} = await supabase.from('product').select('*').ilike('category', `men's clothing`);
    if(data){
        setMensProduct(data);
    }
    if(error){
        console.log(error);
        
    }
}
const getWomensClothing = async () => {
    const {data, error} = await supabase.from('product').select('*').ilike('category', `women's clothing`);
    if(data){
        setWomensProduct(data);
    }
    if(error){
        console.log(error);
        
    }
}


  return {
    product,
    getDataFromSupabase,
    filterData,
    getFilteredData,
    singleProduct,
    getSingleProduct,
    mensClothing,
    getMensClothing,
    womensClothing,
    getWomensClothing
  };
};
