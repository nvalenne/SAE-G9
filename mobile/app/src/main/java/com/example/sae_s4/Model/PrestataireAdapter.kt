package com.example.sae_s4.Model

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView

class PrestataireAdapter(context: Context,prestataireList:ArrayList<Prestataire>): BaseAdapter() {

    private var context: Context = context
    private var prestataireList: ArrayList<Prestataire> = prestataireList
    private var inflater: LayoutInflater = LayoutInflater.from(context)


    override fun getCount(): Int {
        return prestataireList.size
    }

    override fun getItem(p0: Int): Prestataire {
        return prestataireList.get(p0)
    }

    override fun getItemId(p0: Int): Long {
        return 0
    }

    override fun getView(i: Int, view: View?, viewGroup: ViewGroup?): View? {

        val textView = TextView(context)
        textView.setText(prestataireList.get(i).nom + "    " + prestataireList.get(i).prenom)
        return textView
    }
}




