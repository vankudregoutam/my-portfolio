import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCursor = () => {
    return (
        <>
            <AnimatedCursor
                innerSize={20}
                outerSize={20}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.8}
                outerScale={3}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </>
    )
}

export default AnimCursor
