package com.example.sae_s4

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import com.example.sae_s4.Model.Manege
import com.example.sae_s4.Model.ManegeAdapter
import com.example.sae_s4.Model.Prestataire
import com.example.sae_s4.Model.PrestataireAdapter

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Use the [liste_presta.newInstance] factory method to
 * create an instance of this fragment.
 */
class liste_presta : Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        var contentView:View = inflater.inflate(R.layout.fragment_liste_presta, container, false)

        //liste

        //val maneges = arrayOf("Rapide et Furieux   8", "mange2   9", "manege3   10","manege   4", "manege   5")

        var listPresta: ArrayList<Prestataire> = ArrayList()
        listPresta.add(Prestataire("nom1","prenom1"))
        listPresta.add(Prestataire("nom2","prenom2"))
        listPresta.add(Prestataire("nom3","prenom3"))
        listPresta.add(Prestataire("nom4","prenom4"))
        listPresta.add(Prestataire("nom5","prenom5"))
        listPresta.add(Prestataire("nom6","prenom6"))

        //liste manège

        val prestaListView: ListView = contentView.findViewById(R.id.presta_list_view)
        prestaListView.adapter= PrestataireAdapter(requireContext(),listPresta)

        // manegeListView.adapter = ArrayAdapter<String>(requireContext(),R.layout.activity_list_view,R.id.textViewList,maneges)

        return contentView


    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment liste_presta.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(param1: String, param2: String) =
            liste_presta().apply {
                arguments = Bundle().apply {
                    putString(ARG_PARAM1, param1)
                    putString(ARG_PARAM2, param2)
                }
            }
    }
}