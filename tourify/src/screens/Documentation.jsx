import React, { Component } from 'react'
import '../style/root.css'
import tut1 from "../assets/images/tutorial1.png"
import tut2 from "../assets/images/tut2.png"
import tut3 from "../assets/images/tut3.png"
import tut4 from "../assets/images/tut4.png"
import tut5 from "../assets/images/tut5.png"
import logo from '../assets/images/logo-text.png';

class Documentation extends Component {
  render() {
    return (
      //Seite für ein kurzes Tutorial für den Editor

      <div className="flex justify-center">
        <div className="w-full h-full column-1 bg-[#4053A9] flex-col flex ">
          <div className='flex justify-between'>
            <a href="http://localhost:3000"><img src={logo} alt="tourify" className='h-24 w-auto mt-2 ml-2'/></a>
            <p className="text-center text-5xl text-white mb-5 mt-3">Anleitung zur Erstellung eigener Touren</p>
            <div></div>
          </div>

          <div className="w-1/2 self-center">

            <img className="object-scale-down rounded-lg shadow-lg" src={tut1} alt="Hauptseite" />
            <p className='text-white mb-3'>Bild 1.1 - Homepage</p>
            <p className='text-white text-2xl mb-3'>Um eine Tour zu erstellen benötigt man zuerst einen Account. Dafür klickt man auf der 
            Homepage auf <a className='underline text-cyan-100' href='http://localhost:3000/login'>get started.</a> </p>

            <img className="rounded-lg mt-10" src={tut2} alt="Account erstellungs Seite" />
            <p className='text-white mb-3'>Bild 1.2 - Log in page</p>
            <p className="text-white mb-3 text-2xl">Hier kann man sich bei seinem bestehenden Account einloggen oder einen neuen erstellen.</p>

            <img className="rounded-lg mt-10" src={tut3} alt="Project listing Seite" />
            <p className='text-white mb-3'>Bild 1.3 - Projects page</p>
            <p className="text-white mb-3 text-2xl">Anschließend sieht man das Hauptmenü mit allen bereits erstellten Touren. <br />
            Momentan ist sie noch leer. Mit <a className='underline text-cyan-100' href="">Tour erstellen</a> kann man eine Neue hinzufügen.</p>


            <img className="rounded-lg mt-10" src={tut4} alt="Editor" />
            <p className='text-white mb-3'>Bild 1.4 - Editor page</p>
            <p className="text-white mb-3 text-2xl">Sobald man ein Projekt erstellt hat, kann man dieses im Editor bearbeiten. <br /> 
              Hier kann man Elemente wie Bilder, Videos und Audio-Dateien per drag and drop hinzufügen. Auf der rechten Seite kann man dann noch ihre 
              Eigenschaften Anpassen.
            </p>


            <img className="rounded-lg mt-10" src={tut5} alt="Editor" />
            <p className='text-white mb-3'>Bild 1.4 - Editor page</p>
            <p className="text-white mb-3 text-2xl"> Hier wurde beispielsweiße ein Video eingefügt, die Seite könnte für eine Disco erstellt werden. <br /> 
              Anschließend kann man die Station abspeichern und ein QR-Code wird generiert, welcher auf diese Seite verweißt.
            </p>
          
          </div>

        </div>

      </div>
    
    )
  }
}

export default Documentation;