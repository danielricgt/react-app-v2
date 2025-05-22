import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' }); 

import { getGifs } from "../../src/helpers/getgifs"
import { string } from 'prop-types';

describe('test on get gifs', () => { 


        test('should return a gif array', async () => { 
            
            // fiart we take our subject object
            const gifs = await getGifs('Dragon Ball', process.env.VITE_API_KEY);
            expect(gifs.length).toBeGreaterThan(0);
            expect(gifs[0]).toEqual({
                title: expect.any(String) ,    
                id:  expect.any(String),
                url: expect.any(String)
            })

         })

     })