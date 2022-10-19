import React from 'react';

const Blog = () => {
  return (
    <div className="font-serif">
      <h2 className="bg-slate-800 text-center text-cyan-400 m-4 p-2 text-2xl rounded-lg">
        More blogs are coming soon....!!!
      </h2>
      <div className="grid md:grid-cols-2 gap-3 m-4  text-cyan-400 justify-center">
        <div className="bg-slate-800 p-4 rounded-lg text-justify">
          <h1 className="text-xl font-bold">What is Context API?</h1>
          <p>
            Well, Context API is something that makes developers lives easier by
            not letting them keep drilling props on every children to finaly get
            it on where you want. Context API is so cool that it's just like
            boom you use a hook and get your desired props wherever you want in
            its child components.In react component props drillling was a matter
            of hassel, Context API made it easy for us. And thanks
            Programming-Hero for being there for us.
          </p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-justify">
          <h1 className="text-xl font-bold">What is Semantic Tag?</h1>
          <p>
            Semantic tag is a tag with a meaningful name that refers to
            something like instead of div tag we use section tag. We can use
            article, nav, header, aside tags instead of using div, span etc. It
            helps to read the website for the physically challenged people and
            that's why search engines give those websites a good impression
            which is really helpful for SEO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
