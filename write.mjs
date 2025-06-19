import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


export function tulisFile(file, data){
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    // fs.createWriteStream(path.join(__dirname, "Hasil-Tulis", file)).write(data).end()
    const tulis = fs.createWriteStream(path.join(__dirname, "Hasil-Tulis", file))
    tulis.addListener("drain", )
    tulis.end()

    // karena create stream ini hanya 
    //     Fungsi fs.createWriteStream() hanya membuat stream penulisan, tapi tidak langsung menulis data kecuali kamu:
    // Menulis ke stream dengan .write(), atau
    // Menambahkan .end() untuk menyelesaikan stream.
}