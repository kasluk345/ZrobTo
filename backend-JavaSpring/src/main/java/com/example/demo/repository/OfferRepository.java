package com.example.demo.repository;

import com.example.demo.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public interface OfferRepository extends JpaRepository<Offer, UUID> {

    List<Offer> findAllByDeliveryTime(String deliveryTime);
}
