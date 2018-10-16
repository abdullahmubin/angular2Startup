using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2_crud.Controllers
{
    public class PostAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblPosts.AsEnumerable());
        }
    }
}
