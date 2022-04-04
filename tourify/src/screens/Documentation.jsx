import React, { Component } from 'react'
import '../style/root.css'
import tut1 from "../assets/images/tutorial1.png"
import tut2 from "../assets/images/tut2.png"
import tut3 from "../assets/images/tut3.png"
import tut4 from "../assets/images/tut4.png"

class Documentation extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-5/6 h-full column-1 bg-[#4053A9] rounded-lg flex-col flex">
          <p className="text-center text-5xl text-white mb-5">Anleitung zur Erstellung eigener Touren</p>

          <p className='text-center text-white mb-3'>Um eine Tour zu erstellen benötigt man zuerst einen Account. Dafür klickt man auf der 
            Homepage auf <a className='underline text-black' href='http://localhost:3000/login'>get started</a> </p>

          <div className="w-1/2 self-center mb-3">
            <img className="object-scale-down rounded-lg shadow-lg" src={tut1} alt="Hauptseite" />
          </div>

          <p className="text-center text-white mb-3">Hier kann man sich bei seinem bestehenden Account einloggen oder einen neuen erstellen</p>

          <div className="w-1/2 self-center mb-3">
            <img className="rounded-lg shadow-lg" src={tut2} alt="Account erstellungs Seite" />
          </div>

          <p className="text-center text-white mb-3">Anschließend sieht man das Hauptmenü mit allen bereits erstellten Touren.
          Momentan ist sie noch leer. Mit <a className='underline text-cyan' href="">Tour erstellen</a> kann man eine neue hinzufügen</p>

          <div className="w-1/2 self-center mb-3">
            <img className="rounded-lg" src={tut3} alt="Project listing Seite" />
          </div>

          <p className="text-center text-white mb-3">Sobald man ein Projekt erstellt hat, kann man dieses im Editor bearbeiten. <br /> 
            Hier kann man Elemente wie Bilder, Videos und Audio-Dateien per drag and drop hinzufügen. 
          </p>

          <div className="w-1/2 self-center mb-3">
            <img className="rounded-lg" src={tut4} alt="Editor" />
          </div>

          <p className="text-center text-white mb-3"> Hier ist eine Beispielseite für ein Museum erstellt worden. <br /> 
            Anschließend kann man die Station abspeichern und ein QR code wird generiert, welche zu dieser Seite verweißt.
          </p>

        </div>

      </div>
    
    )
  }
}

export default Documentation;