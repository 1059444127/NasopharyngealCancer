﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.NasopharynxCancer.Controllers
{
    public class NC_Treatment_TargetedTreatmentController : Controller
    {
        // GET: NasopharynxCancer/NC_Treatment_TargetedTreatment
        #region 框架页

        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult Top()
        {
            return View();
        }
        public ActionResult Body()
        {
            return View();
        }
        public ActionResult Left()
        {
            return View();
        }
        #endregion

        //列表页
        public ActionResult List()
        {
            return View();
        }

        //新增页
        public ActionResult TargetedTreatment()
        {
            return View();
        }
    }
}