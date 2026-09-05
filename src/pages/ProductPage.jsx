import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplet, Settings, Shield, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = companyInfo.products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link to="/#products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-amr-orange transition mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          
          <div className="grid lg:grid-cols-2">
            
            {/* Product Image Panel */}
            <div className="bg-slate-100 flex items-center justify-center relative min-h-[400px]">
              {product.image ? (
                <img src={product.image} alt={product.brand} className="w-full h-full object-cover absolute inset-0" />
              ) : (
                <div className="text-slate-400 font-medium">No Image Available</div>
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
              
              {/* Mobile overlay text */}
              <div className="absolute bottom-6 left-6 right-6 lg:hidden z-10 text-white">
                <span className="inline-block px-3 py-1 bg-amr-orange text-[10px] font-bold uppercase rounded tracking-wider mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl font-extrabold">{product.brand}</h1>
              </div>
            </div>

            {/* Product Details Panel */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              
              <div className="hidden lg:block mb-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-amr-orange text-[10px] font-bold uppercase rounded tracking-wider mb-3 border border-orange-100">
                  {product.category}
                </span>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{product.brand}</h1>
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mt-1">Industrial Series</p>
              </div>

              <div className="space-y-6">
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Product Description</h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {product.description}
                  </p>
                </div>

                {/* Example placeholder data since specific details per product aren't in docx. */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">High-efficiency particulate removal optimized for industrial processes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">Built with durable, corrosion-resistant materials for extended operational lifespan.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">Compliant with stringent environmental and safety standards.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <Link to="/#contact" state={{ product: product.brand, category: product.category }} className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5">
                    Enquire Now
                  </Link>
                  <a href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`} className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition-colors">
                    Call Sales
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs / Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-5">
                <Settings className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">Automated Operations</h4>
             <p className="text-sm text-slate-600 leading-relaxed">Integrated smart controllers enable minimal manual intervention and optimize backwash cycles based on real-time pressure differential data.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-amr-orange mb-5">
                <Droplet className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">High Throughput</h4>
             <p className="text-sm text-slate-600 leading-relaxed">Designed for maximum flow rates with minimal head loss, ensuring that large volumes of fluid are processed quickly and efficiently.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-5">
                <Shield className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">Reliable Performance</h4>
             <p className="text-sm text-slate-600 leading-relaxed">Engineered using industrial-grade materials to withstand harsh operating conditions and corrosive fluid environments over decades of use.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
