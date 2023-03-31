package com.example.sae_s4

import android.media.Image
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.drawerlayout.widget.DrawerLayout
import androidx.navigation.findNavController
import androidx.navigation.ui.NavigationUI
import com.synnapps.carouselview.CarouselView
import com.synnapps.carouselview.ImageListener

import androidx.databinding.DataBindingUtil
import com.example.sae_s4.Model.Manege
import com.example.sae_s4.Model.Prestataire
import com.example.sae_s4.databinding.ActivityMainBinding


class MainActivity : AppCompatActivity() {

    var imageArray:ArrayList<Int> = ArrayList()
    var carouselView:CarouselView? = null

    //carousel
    var imageListener = ImageListener { position, imageView -> imageView.setImageResource(imageArray[position])}

    private lateinit var drawerLayout: DrawerLayout

    //listes

    var listMan: ArrayList<Manege> = ArrayList()
    var listPresta: ArrayList<Prestataire> = ArrayList()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        @Suppress("UNUSED_VARIABLE")
        val binding = DataBindingUtil.setContentView<ActivityMainBinding>(this, R.layout.activity_main)

        drawerLayout = binding.drawerLayout


        drawerLayout = binding.drawerLayout

        val navController = this.findNavController(R.id.myNavHostFragment)

        NavigationUI.setupActionBarWithNavController(this,navController, drawerLayout)

        NavigationUI.setupWithNavController(binding.navView, navController)



        //carousel
        imageArray.add(R.drawable.manege2)
        imageArray.add(R.drawable.manege3)
        imageArray.add(R.drawable.manege4)
        imageArray.add(R.drawable.peche_aux_canards)
        carouselView =findViewById (R.id.carousel)
        carouselView!!.pageCount = imageArray.size
        carouselView!!.setImageListener(imageListener)





    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = this.findNavController(R.id.myNavHostFragment)
        return NavigationUI.navigateUp(navController, drawerLayout)
    }

    fun initializeList(){

        listMan.add(Manege("Rapide et Furieux","8"))
        listMan.add(Manege("mange2","9"))
        listMan.add(Manege("mange3","10"))
        listMan.add(Manege("mange4","11"))
        listMan.add(Manege("mange5","12"))
        listMan.add(Manege("mange6","13"))

        listPresta.add(Prestataire("nom1","prenom1"))
        listPresta.add(Prestataire("nom2","prenom2"))
        listPresta.add(Prestataire("nom3","prenom3"))
        listPresta.add(Prestataire("nom4","prenom4"))
        listPresta.add(Prestataire("nom5","prenom5"))
        listPresta.add(Prestataire("nom6","prenom6"))
    }

}