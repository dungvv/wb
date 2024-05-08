import AlamofireIcon from '@/assets/icons/data/Alamofire.png'
import CSharpIcon from '@/assets/icons/language/c.svg'
import CakePHPIcon from '@/assets/icons/data/CakePHP.png'
import CoreDataIcon from '@/assets/icons/database/CoreData.png'
import DartIcon from '@/assets/icons/language/dart.svg'
import DiangoIcon from '@/assets/icons/data/Django.png'
import ElasticsearchIcon from '@/assets/icons/database/elasticsearch.png'
import FirebaseIcon from '@/assets/icons/database/Firebase.png'
import FlutterIcon from '@/assets/icons/data/Flutter.png'
import HadoopIcon from '@/assets/icons/data/Hadoop.png'
import { Image } from 'antd'
import JavaIcon from '@/assets/icons/language/java.svg'
import JavascriptIcon from '@/assets/icons/language/javascript.svg'
import KotlinIcon from '@/assets/icons/language/kotlin.svg'
import MagentoIcon from '@/assets/icons/data/Magento.png'
import MeteorIcon from '@/assets/icons/data/Meteor.png'
import MongoDBIcon from '@/assets/icons/database/mongoDB.png'
import MySQLIcon from '@/assets/icons/database/MySQL.png'
import NestJSIcon from '@/assets/icons/data/NestJS.png'
import NextJSIcon from '@/assets/icons/data/NextJS.png'
import NodeJSIcon from '@/assets/icons/data/NodeJS.png'
import NuxtJSIcon from '@/assets/icons/data/NuxtJS.png'
import ObjectiveCIcon from '@/assets/icons/language/objective-c.svg'
import PHPIcon from '@/assets/icons/language/php.svg'
import PostgreSQLIcon from '@/assets/icons/database/postgreSQL.png'
import PowerBIIcon from '@/assets/icons/data/Power-BI.png'
import PythonIcon from '@/assets/icons/language/python.svg'
import QlikIcon from '@/assets/icons/data/Qlik.png'
import ReactJSIcon from '@/assets/icons/data/ReactJS.png'
import ReactiveCocoa from '@/assets/icons/data/ReactiveCocoa.png'
import RealmIcon from '@/assets/icons/database/Realm.png'
import RubyOnRailsIcon from '@/assets/icons/data/Ruby-on-Rails.png'
import RxJavaIcon from '@/assets/icons/data/RxJava.png'
import SQLiteIcon from '@/assets/icons/database/SQLite.png'
import SailJSIcon from '@/assets/icons/data/sailsJS.png'
import SpringBootIcon from '@/assets/icons/data/Spring-Boot.png'
import SwiftIcon from '@/assets/icons/language/swift.svg'
import SymfonyIcon from '@/assets/icons/data/Symfony.png'
import TableauIcon from '@/assets/icons/data/Tableau.png'
import TypescriptIcon from '@/assets/icons/language/typescript.svg'
import VueJSIcon from '@/assets/icons/data/vuejs.png'
import WordPressIcon from '@/assets/icons/data/WordPress.png'
import YiiIcon from '@/assets/icons/data/YII.png'

export enum TECHNOLOGIES {
  LANGUAGE = 'Language',
  DATABASE = 'Database',
  DATA = 'Data'
}
export const technologyTabs = [TECHNOLOGIES.LANGUAGE, TECHNOLOGIES.DATABASE, TECHNOLOGIES.DATA]

export const languageList = [
  {
    key: 'C#',
    label: 'C#',
    icon: <Image alt='c#' src={CSharpIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'TypeScript',
    label: 'TypeScript',
    icon: <Image alt='TypeScript' src={TypescriptIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'PHP',
    label: 'PHP',
    icon: <Image alt='PHP' className='text-white' src={PHPIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Javascript',
    label: 'Javascript',
    icon: <Image alt='Javascript' src={JavascriptIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Dart',
    label: 'Dart',
    icon: <Image alt='Dart' src={DartIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Swift',
    label: 'Swift',
    icon: <Image alt='Swift' src={SwiftIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Java',
    label: 'Java',
    icon: <Image alt='Java' src={JavaIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Kotlin',
    label: 'Kotlin',
    icon: <Image alt='Kotlin' src={KotlinIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Objective C',
    label: 'Objective C',
    icon: <Image alt='Objective C' src={ObjectiveCIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Python',
    label: 'Python',
    icon: <Image alt='Python' src={PythonIcon} preview={false} height={56} width={56} />
  }
]

export const databaseList = [
  {
    key: 'Elasticsearch',
    label: 'Elasticsearch',
    icon: <Image alt='Elasticsearch' src={ElasticsearchIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'MongoDB',
    label: 'MongoDB',
    icon: <Image alt='MongoDB' src={MongoDBIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'PostgreSQL',
    label: 'PostgreSQL',
    icon: <Image alt='PostgreSQL' src={PostgreSQLIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'MySQL',
    label: 'MySQL',
    icon: <Image alt='MySQL' src={MySQLIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Firebase',
    label: 'Firebase',
    icon: <Image alt='Firebase' src={FirebaseIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'SQLite',
    label: 'SQLite',
    icon: <Image alt='SQLite' src={SQLiteIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Realm',
    label: 'Realm',
    icon: <Image alt='Realm' src={RealmIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'CoreData',
    label: 'CoreData',
    icon: <Image alt='CoreData' src={CoreDataIcon} preview={false} height={56} width={56} />
  }
]

export const dataList = [
  {
    key: 'Tableau',
    label: 'Tableau',
    icon: <Image alt='Tableau' src={TableauIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Qlik',
    label: 'Qlik',
    icon: <Image alt='Qlik' src={QlikIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Power BI',
    label: 'Power BI',
    icon: <Image alt='Power BI' src={PowerBIIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Hadoop',
    label: 'Hadoop',
    icon: <Image alt='Hadoop' src={HadoopIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'NodeJS',
    label: 'NodeJS',
    icon: <Image alt='NodeJS' src={NodeJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Spring Boot',
    label: 'Spring Boot',
    icon: <Image alt='Spring Boot' src={SpringBootIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Vue.JS',
    label: 'Vue.JS',
    icon: <Image alt='Vue.JS' src={VueJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Magento',
    label: 'Magento',
    icon: <Image alt='Magento' src={MagentoIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'NestJS',
    label: 'NestJS',
    icon: <Image alt='NestJS' src={NestJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'ReactJS',
    label: 'ReactJS',
    icon: <Image alt='ReactJS' src={ReactJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'WordPress',
    label: 'WordPress',
    icon: <Image alt='WordPress' src={WordPressIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Sails.JS',
    label: 'Sails.JS',
    icon: <Image alt='Sails.JS' src={SailJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'RxJava',
    label: 'RxJava',
    icon: <Image alt='RxJava' src={RxJavaIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Alamofire',
    label: 'Alamofire',
    icon: <Image alt='Alamofire' src={AlamofireIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Symfony',
    label: 'Symfony',
    icon: <Image alt='Symfony' src={SymfonyIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Flutter',
    label: 'Flutter',
    icon: <Image alt='Flutter' src={FlutterIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'ReactiveCocoa',
    label: 'Reactive Cocoa',
    icon: <Image alt='ReactiveCocoa' src={ReactiveCocoa} preview={false} height={56} width={56} />
  },
  {
    key: 'Django',
    label: 'Django',
    icon: <Image alt='Django' src={DiangoIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Ruby on Rails',
    label: 'Ruby on Rails',
    icon: <Image alt='Ruby on Rails' src={RubyOnRailsIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'CakePHP',
    label: 'CakePHP',
    icon: <Image alt='CakePHP' src={CakePHPIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'YII',
    label: 'YII',
    icon: <Image alt='YII' src={YiiIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Next.js',
    label: 'Next.js',
    icon: <Image alt='Next.js' src={NextJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Nuxt.js',
    label: 'Nuxt.js',
    icon: <Image alt='Nuxt.js' src={NuxtJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Meteor',
    label: 'Meteor',
    icon: <Image alt='Meteor' src={MeteorIcon} preview={false} height={56} width={56} />
  }
]

export const technologyList = {
  [TECHNOLOGIES.LANGUAGE]: languageList,
  [TECHNOLOGIES.DATABASE]: databaseList,
  [TECHNOLOGIES.DATA]: dataList
}
