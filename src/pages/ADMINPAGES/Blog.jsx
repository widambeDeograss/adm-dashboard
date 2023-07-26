import React, { useState, useEffect } from "react";
import Button from "../../components/adminComponents/Button";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import Empty from "../../components/adminComponents/Empty";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Typography from "../../components/adminComponents/Typography";
import { useNavigate } from "react-router-dom";
// import ProductModal from "./BlogModal";

function BlogCards({ blog }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [CurrentBlog, setCurrentBlog] = useState();
  const [showMore, setShowMore] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState('');

  function closeProductModal() {
    setModalOpen(false);
  }

  function openProductModal() {
    setModalOpen(true);
  }

  function openModal() {
    console.log("open modal");
    setModalOpen(true);
  }
  const handle_delete =() => {
    //delete

  };

}

export default function Blogs() {
  //user
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  //fetch blogs
  if (isLoading)
  return <h1>Loading.....</h1>;
  if (!blogs || !blogs.length) {
    return (
      <div  className="'flex justify-center items-center'">
        <Empty message="You don't have any Blogs yet." />
        <Button
            color='primary'
            onClick={() => {
              navigate('/createBlog')
            }}
            className=""
          >
            Create Blog
          </Button>
      
      </div>
    )
  }
  return (
    <Page>
      <PageHeader
        extra={
          <Button
            color='primary'
            onClick={() => {
              navigate('createBlog')
            }}
          >
            Create Blog
          </Button>
        }
      >
        <Typography variant='h1'>Blogs</Typography>
      </PageHeader>
      <PageBody>
        {blogs && blogs.map((blog) => <BlogCards blog={blog} />)}
      </PageBody>
    </Page>
  )
}
