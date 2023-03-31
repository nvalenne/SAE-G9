package com.example.sae_s4.Model

import android.annotation.SuppressLint
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView







class ManegeAdapter(context: Context,manegeList:ArrayList<Manege>): BaseAdapter() {

    private var context:Context = context
    private var manegeList:ArrayList<Manege> =manegeList
    private var inflater:LayoutInflater = LayoutInflater.from(context)


    override fun getCount(): Int {
        return manegeList.size
    }

    override fun getItem(p0: Int): Manege {
        return manegeList.get(p0)
    }

    override fun getItemId(p0: Int): Long {
        return 0
    }

    override fun getView(i: Int, view: View?, viewGroup: ViewGroup?): View? {

//        val currentManege:Manege = getItem(i);
//        val manegeNom:String = currentManege.nom
//        val manegePrix:String = currentManege.prix
//
//
//        val manegeNomView:TextView = view.findViewById(v.id.man_nom)
//        manegeNomView.text = manegeNom
//
//        val manegePrixView:TextView = view.findViewById(com.example.sae_s4.R.id.man_prix)
//        manegePrixView.text = manegePrix
//
//        return inflater.inflate(com.example.sae_s4.R.layout.adapter_item,null)
//
        val textView = TextView(context)
        textView.setText(manegeList.get(i).nom+"    "+manegeList.get(i).prix)
        return textView
    }




}