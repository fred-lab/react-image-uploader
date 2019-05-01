<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api/upload", name="api_") */
class UploadController extends AbstractController
{
    /**
     * @Route("/init", name="upload")
     */
    public function init()
    {
        // todo
    }
    /**
     * @Route("/transfer", name="upload")
     */
    public function transfer()
    {
        //todo
    }
}
