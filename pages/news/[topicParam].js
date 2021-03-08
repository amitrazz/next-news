import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import axios  from "../../axios";
const News = ({ newsInformation }) => {
  const router = useRouter()
  const { id } = router.query
   return (
        <div>
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /* Remove the navbar's default rounded borders and increase the bottom margin */ \n    .navbar {\n      margin-bottom: 50px;\n      border-radius: 0;\n    }\n    \n    /* Remove the jumbotron's default bottom margin */ \n     .jumbotron {\n      margin-bottom: 0;\n    }\n   \n    /* Add a gray background color and some padding to the footer */\n    footer {\n      background-color: #f2f2f2;\n      padding: 25px;\n    }\n  ",
              }}
            />
          </Head>
          <div className="jumbotron">
            <div className="container text-center">
              <h1>News</h1>
              <p>Enjoy latest and relevent news </p> {id}
            </div>
          </div>
    
    
    
          <div className="container">    
            <div className="row">
                {newsInformation.map(newsIteam => {
                    return(
                        <div className="col-sm-12" style={{height: '400px'}}>
                            <div className="panel panel-primary">
                                <div className="panel-heading">{newsIteam.title}</div>
                                <div className="panel-body"><img src={newsIteam.urlToImage} className="img-responsive" style={{width: '250px'}} alt="Image" /></div>
                                <div className="panel-footer">{newsIteam.description}</div>
                                <div className="panel-footer">{newsIteam.source.name} - {newsIteam.author}</div>
                            </div>
                        </div>
                    )
                })}
            </div> 
          </div>
        </div>
      );
};
const getNewsdata = async (queryParam) => {
    // let queryParam = 'bitcoin'; // need to add logic to search dynamically 
    const pageSize = 100;
    const data = await axios.get(`everything?q=${queryParam}&pageSize=${pageSize}`);
    return data.data.articles;
};

export async function getServerSideProps(context) {
  const newsInformation = await getNewsdata(context.params.topicParam
    .split(" ")
    .join("%20"));
  return {
    props: {
      newsInformation,
    }
  };
}
export default News;
