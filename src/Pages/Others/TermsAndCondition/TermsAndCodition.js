import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCodition = () => {
    return (
        <div>
            <h3>Here is our Terms and Condition</h3>
            <p>Go back To Registration: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCodition;