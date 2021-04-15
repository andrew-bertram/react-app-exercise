// BONUS

// 6a
import { useState } from 'react';

// 6b
const Bonus = () => {
    // 6d
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 6f
    const [letter, addLetter] = useState(letters[0]);
    const nextLetter = () => 

    // 6e
    return (
        <div>
            <h1>{letter}</h1>
            <button>NEXT LETTER</button>
        </div>
    );
}

// 6c
export default Bonus;