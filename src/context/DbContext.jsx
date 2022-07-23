import { createContext, useContext, useState, useEffect } from 'react';
import {app, db} from '../firebase.js'
import { collection, addDoc, getDocs } from 'firebase/firestore';


const dbContext = createContext();

export const useDB = () => {
  const context = useContext(dbContext);
  if (!context) throw new Error('There is no DB provider');
  return context;
}

export function DBProvider({children}) {
    const [step, setStep] = useState(1)
    const [results, setResult] = useState({
        items: []
    });
    const [data, setData] = useState([]);
    const [checked, setChecked] = useState([]);
    const [amounts, setAmounts] = useState();

    const [ locations, setLocations] = useState([''])

    const [information, setInformation] = useState({
        Ulica: '',
        Maisto: '',
        KodPocztowy: '',
        Phone: '',
        Data: '',
        Godzina: '',
        Uwage: '',
    })




    const handleCheck = (event) => {
        if (event.target.checked) {
            setChecked([...checked, event.target.value]);
          }else {
            setChecked(checked.filter(item => item !== event.target.value));
          }
       
      };

      const handleChangeAmount = (event) => {
        setAmounts({
            ...amounts,
            [event.target.name]: event.target.value
        })
    
        
      }


      const handleChange = (e) => {
        setInformation({
            ...information,
            [e.target.name]: e.target.value
        })
    }
      
  

    
    const collectionRef = collection(db, 'fundation');
    
    useEffect(() => {
        const getData = async () => {
        const datos = await getDocs(collectionRef);
        datos.forEach((element) => {
            setData(element.data());
        });
        };
        getData();
    }, []);


    const handleSave = async () => {
        const newDoc = await addDoc(collectionRef, 
        results
        );
       ;
    }


    const onSave = (data, key) => {
        setResult(prev => ({
            ...prev,
            [key]: data
        }))
        setStep(prev => prev + 1)
    }

    const back = () => {
     
        setStep(prev => prev - 1)
    }
    
    return (
        <dbContext.Provider value={{data, results,   handleCheck, checked, amounts,handleChangeAmount, handleChange, handleSave, step, onSave, back}}>
        {children}
        </dbContext.Provider>
    )
}