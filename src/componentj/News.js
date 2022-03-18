import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props) => {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)



  // articles = [
  //   {
  //     "source": { "id": "lequipe", "name": "L'equipe" },
  //     "author": "L'EQUIPE",
  //     "title": "Les femmes n'auront plus le droit de faire du sport en Afghanistan, affirme un dirigeant des Talibans",
  //     "description": "Les Talibans n'entendent pas autoriser les femmes à jouer au cricket ou à pratiquer tout autre sport, a affirmé le chef adjoint de la commission culturelle des talibans à un média australien.",
  //     "url": "https://www.lequipe.fr/Tous-sports/Actualites/Les-femmes-n-auront-plus-le-droit-de-faire-du-sport-en-afghanistan-affirme-un-dirigeant-des-talibans/1283984",
  //     "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/la-delegation-afghane-aux-jo-de-tokyo-p-lahalle-l-equipe/1500000001540035/254:179,1829:1229-640-427-75/1914b.jpg",
  //     "publishedAt": "props.pageSize21-09-09T09:36:00+00:00",
  //     "content": "Dans une interview accordée à SBS News, le chef adjoint de la commission culturelle des talibans, Ahmadullah Wasiq, a déclaré que les femmes afghanes ne seront pas autorisées à pratiquer des sports, … [+1019 chars]"
  //   },
  //   {
  //     "source": { "id": "time", "name": "Time" },
  //     "author": "Associated Press",
  //     "title": "The Taliban Will Ban Women's Sports in Afghanistan, a Report Says",
  //     "description": "A Taliban spokesperson has been quoted as saying that women's sports — and women's cricket specifically — will be banned in Afghanistan.",
  //     "url": "http://time.com/6096243/taliban-women-sport-afghanistan/",
  //     "urlToImage": "https://api.time.com/wp-content/uploads/props.pageSize21/09/GettyImages-179347437.jpg?quality=85&w=1024&h=628&crop=1",
  //     "publishedAt": "props.pageSize21-09-09T06:59:11Z",
  //     "content": "SYDNEY — Australia’s SBS TV has quoted a Taliban spokesperson as saying that women’s sports — and women’s cricket specifically — will be banned by his group in Afghanistan.\r\n“In cricket, they might f… [+2681 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "props.pageSizeprops.pageSize-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "props.pageSizeprops.pageSize-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 

  const  updateNews = async ()=> {
    props.setProgress(10);
    let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({loading: true});
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await  data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

      props.setProgress(100);
  }


 useEffect(() => {
   document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  updateNews();
  // eslint-disable-next-line
 }, [])



  // fetch api use
  // async componentDidMount(){
    // console.log('cdm');
    // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8238d6b14fe1499f9a74400c70625f9e&page=1&pageSize=${props.pageSize}`;
    // setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await  data.json();
    // console.log(parsedData);
    // setState({articles: parsedData.articles,
    //    totalResults: parsedData.totalResults,
    //    loading: false,
    //   })
    // updateNews();
  // }
    
  // const handlePrevClick = async ()=>{
    // console.log('Previous');

    // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8238d6b14fe1499f9a74400c70625f9e&page=${state.page - 1}&pageSize=${props.pageSize}`;
    // setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await  data.json();
    // console.log(parsedData);
   
    // setState({
    //   pstate.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    //  } )
// setState({state.page - 1});
// }
// setPage(page - 1);
// updateNews();
  // }  

//  const handleNextClick = async ()=>{
    // console.log('Next');
    
    // state.page +1 > Math.state.totalResults/props.pageSize))){

    //   let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8238d6b14fe1499f9a74400c70625f9e&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //   setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await  data.json();
      
     
    //     setState({
    //     page: state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //    } )
    //   }
    // setState({page: state.page + 1});
    // setPage(page + 1);
    // updateNews();
  // }
    
  const fetchMoreData = async () => {
    //setState({page: state.page + 1});
    
    let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    // setState({loading: true});
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await  data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

    //setState({
      //  articles: articles.concat(parsedData.articles),
      //  totalResults: parsedData.totalResults,
      //  loading: false, We commented this loading and above loading beacause we are showing loading from InfiniteScroll
      // })

  };
    
   
    return (
      <>
        <h1 className="text-center" style={{ margin: '30px 0px' , marginTop: '70px'}} >NewsMonkey- Top  {capitalizeFirstLetter(props.category)} Headlines </h1>
         {/* this means that if loading is true then show spinner or else hide it  */}
        {loading && <Spinner/>} 

        {/* Infinite scroll is used to do infinite scrolling which is taken from react infinite Scroll. Import this component too */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className="container">
         <div className="row">
          {/* Below syntax means that if loading is false then show the content orelse donot show */}
          {/* {!state.loading && state.articles.map((element) => { next line is used to do infinite scroll*/}
          { articles.map((element) => {

         return <div className="col-md-4" key={element.url} >
            <NewsItem key={element.url}  title={element.title } description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
          })}
        </div>

        </div>

        </InfiniteScroll>
        


      {/* <div className="container d-flex justify-content-between">
      <button disabled={state.page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; previous</button>
      <button disabled={state.page +1 > Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div> */}
      </>

    )
  
}

News.defaultProps ={
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propsTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

 export default News
