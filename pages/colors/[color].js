import React from 'react'
import { colors } from '../../colors';

const color = ({ color }) => {
    return (
        <div >
            <h1 style = {{color : `${color}`}}>{color}</h1>
            {/* <h1 style = {{color : `${color.value}`}}>{color.id}</h1>
            <h1>{color.value}</h1> */}
        </div>
    )
}

export default color;


export async function getServerSideProps ( {params}){
    const color = params.color;
    return {
        props : { color}
    }
}

//getStaticProps

/* export async function getStaticProps({params}){
    const color = colors.find(color => color.id === params.color);

    return {
        props : { color }
    }
} */

/* export async function getStaticPaths () {
    //crear ruta por cada color
    const paths = colors.map(color => ({
        params : { color : color.id }
    }))

    return { paths , fallback : false}
} */