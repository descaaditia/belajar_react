/* eslint-disable react/prop-types */
export default function Header({author}){
    return ( <h1 className="judul">Belajar React Boss {author ? author : 'biar Ganteng bingits' }🎂</h1>);
  }