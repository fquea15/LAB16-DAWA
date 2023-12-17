import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages = [
    {
      name: 'JavaScript',
      description:
        'Un lenguaje de scripting versátil utilizado en el desarrollo web.',
      image:
        'https://think360studio-media.s3.ap-south-1.amazonaws.com/photo/plugin/article/2022/Java-script-11102022.jpg',
    },
    {
      name: 'Python',
      description:
        'Conocido por su sintaxis limpia y fácil legibilidad, es utilizado en desarrollo web, inteligencia artificial, y más.',
      image:
        'https://th.bing.com/th/id/OIP.X9-1XArGru4X126O7GMF9QHaD_?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Java',
      description:
        'Un lenguaje de programación orientado a objetos utilizado en el desarrollo de aplicaciones empresariales y móviles.',
      image:
        'https://th.bing.com/th/id/R.85fd2031f61d9bd63a3e0404fad0580a?rik=Mw7QIZ3ZM8kWBA&pid=ImgRaw&r=0',
    },
    {
      name: 'C++',
      description:
        'Un lenguaje de programación de propósito general con características de programación orientada a objetos.',
      image:
        'https://miro.medium.com/max/1400/1*yiQ0R11HTIvp3XTyQGxXFw.png',
    },
    {
      name: 'C#',
      description:
        'Un lenguaje de programación desarrollado por Microsoft para el desarrollo de aplicaciones de escritorio y web.',
      image:
        'https://1.bp.blogspot.com/-T7q9suY7bi8/XuoiY8UAqcI/AAAAAAAAAHc/THbfYEdwLAU-7MFC9xc7EECWf6fUzJVegCK4BGAsYHg/s560/C%2523.png',
    },
    {
      name: 'Ruby',
      description:
        'Un lenguaje dinámico conocido por su elegante sintaxis y enfoque en la simplicidad.',
      image:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png',
    },
    {
      name: 'Swift',
      description:
        'Desarrollado por Apple, es utilizado para crear aplicaciones iOS y macOS.',
      image:
        'https://th.bing.com/th/id/R.9120efc6838668971863b59ea20038c8?rik=FtoAsDQVbrKNyA&pid=ImgRaw&r=0',
    },
    {
      name: 'Go',
      description:
        'Desarrollado por Google, es conocido por su rendimiento eficiente y su simplicidad.',
      image:
        'https://www.softzone.es/app/uploads-softzone.es/2020/06/Programaci%C3%B3n-GO.jpg',
    },
    {
      name: 'PHP',
      description:
        'Un lenguaje de script utilizado principalmente para el desarrollo web del lado del servidor.',
      image:
        'https://3.bp.blogspot.com/-PoPFCfyx1Ys/Vu7mg2sPcRI/AAAAAAAACPM/zWa54lq3f2QWjkYH60Y5_k5bJeuDOskSg/s1600/php.jpg',
    },
    {
      name: 'TypeScript',
      description:
        'Una versión tipada de JavaScript, utilizado para el desarrollo de aplicaciones web.',
      image:
        'https://th.bing.com/th/id/R.926e7d7ce87f377dfce2008cb2794290?rik=woz477fc%2frUQ5Q&pid=ImgRaw&r=0',
    },
    {
      name: 'Rust',
      description:
        'Con un enfoque en la seguridad y el rendimiento, es utilizado para sistemas de bajo nivel y desarrollo de software nativo.',
      image:
        'https://blog.desdelinux.net/wp-content/uploads/2018/07/Rust-1.jpg',
    },
    {
      name: 'Kotlin',
      description:
        'Un lenguaje moderno utilizado para el desarrollo de aplicaciones Android.',
      image:
        'https://crehana-blog.imgix.net/media/filer_public/a2/a2/a2a2c4fb-5537-4805-8979-3db6b130aea1/que-es-kotlin.jpg?auto=format&q=45&w=1920&h=auto&fit=crop',
    },
    {
      name: 'Scala',
      description:
        'Un lenguaje de programación multiparadigma utilizado para construir aplicaciones escalables y concisas.',
      image:
        'https://kinsta.com/wp-content/uploads/2021/03/1024px-Scala-full-color.svg.png',
    },
    {
      name: 'R',
      description:
        'Utilizado para estadísticas y análisis de datos, es popular entre los científicos de datos.',
      image:
        'https://diarioti.com/wp-content/uploads/2015/07/shutterstock_292002803-jijomathaidesigners-R-programacion.jpg',
    },
    {
      name: 'Dart',
      description:
        'Utilizado para desarrollar aplicaciones móviles y web, es el lenguaje principal para Flutter.',
      image:
        'https://th.bing.com/th/id/R.7f843a5b11d299be5f7e264103acb25f?rik=AeaOiSQeui7UtQ&pid=ImgRaw&r=0',
    },
    {
      name: 'Haskell',
      description:
        'Un lenguaje funcional conocido por su elegancia y robustez.',
      image:
        'https://www.bambu-mobile.com/wp-content/uploads/2022/08/haskell-desarrollo-progrmacio-lenguaje-de-programacion-codigo-abierto-blockchain-big-data-bambu-mobilr-tecnologia.png',
    },
    {
      name: 'Lua',
      description:
        'Un lenguaje de scripting ligero utilizado en juegos y aplicaciones embebidas.',
      image:
        'https://blog.desdelinux.net/wp-content/uploads/2020/07/Lua.png',
    },
    {
      name: 'Perl',
      description:
        'Un lenguaje de scripting utilizado para una variedad de tareas, incluido el procesamiento de texto y la administración del sistema.',
      image:
        'https://i.ytimg.com/vi/qzCQ_0jD1bs/maxresdefault.jpg',
    },
    {
      name: 'Shell',
      description:
        'Utilizado para la automatización de tareas y la interacción con sistemas operativos Unix.',
      image:
        'https://cdn.educba.com/academy/wp-content/uploads/2020/05/Bash-Shell-Script.jpg',
    },
  ];

  getLanguages(): Observable<any[]> {
    return of(this.languages);
  }
}
