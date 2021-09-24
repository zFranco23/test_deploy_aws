import React from 'react'
import Link from 'next/link';
import { colors } from '../../colors';

 
const index = () => {
    return (
        <div>
            Colors pe chato
            <ul>
            
            {
            
                colors.map((color)=>(
                    <li>

                        <Link href={`/colors/${color.id}`} >
                            {color.id}
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default index
