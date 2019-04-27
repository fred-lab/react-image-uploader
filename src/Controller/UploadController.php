<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api", name="api_") */
class UploadController extends AbstractController
{
    /**
     * @Route("/upload", name="upload")
     */
    public function index()
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/UploadController.php',
        ]);
    }
}
